import React, { useState } from 'react';
import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';
import { curveBasis } from '@visx/curve';
import { Text } from '@visx/text';
import { Laptop, Server, Shield, Globe } from 'lucide-react';

// Define types for our flow nodes and edges
const NodeType = {
  DEVICE: 'device',
  QUAD100: 'quad100',
  EXIT_NODE: 'exitNode',
  DNS: 'dns'
} as const;

const EdgeType = {
  DEVICE_QUAD100: 'device-quad100',
  QUAD100_EXIT_NODE: 'quad100-exitNode',
  EXIT_NODE_DNS: 'exitNode-dns',
  DNS_EXIT_NODE: 'dns-exitNode',
  EXIT_NODE_QUAD100: 'exitNode-quad100',
  QUAD100_DEVICE: 'quad100-device'
} as const;

type NodeType = typeof NodeType[keyof typeof NodeType];
type EdgeType = typeof EdgeType[keyof typeof EdgeType];

interface Node {
  id: NodeType;
  label: string;
  icon: React.ElementType;
  x: number;
  y: number;
}

interface Edge {
  id: EdgeType;
  source: NodeType;
  target: NodeType;
  label?: string;
  reverse?: boolean;
}

interface Point {
  x: number;
  y: number;
}

interface Step {
  title: string;
  description: string;
  activeNodes: NodeType[];
  activeEdges: EdgeType[];
  isSplitDNS?: boolean;
}

// Constants for our visualization
const width = 500;
const height = 250;
const padding = 40;

const ExitNodeDNSFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Define nodes (components in our DNS flow)
  const nodes: Node[] = [
    { id: NodeType.DEVICE, label: 'Your Device', icon: Laptop, x: padding * 2, y: padding * 2 },
    { id: NodeType.QUAD100, label: 'Quad100', icon: Shield, x: padding * 2, y: height - padding * 2 },
    { id: NodeType.EXIT_NODE, label: 'Exit Node', icon: Server, x: width - padding * 2, y: padding * 2 },
    { id: NodeType.DNS, label: 'Public DNS', icon: Globe, x: width - padding * 2, y: height - padding * 2 },
  ];

  // Define edges (connections between components)
  const edges: Edge[] = [
    { id: EdgeType.DEVICE_QUAD100, source: NodeType.DEVICE, target: NodeType.QUAD100 },
    { id: EdgeType.QUAD100_EXIT_NODE, source: NodeType.QUAD100, target: NodeType.EXIT_NODE, label: 'WireGuard Tunnel' },
    { id: EdgeType.EXIT_NODE_DNS, source: NodeType.EXIT_NODE, target: NodeType.DNS },
    { id: EdgeType.DNS_EXIT_NODE, source: NodeType.DNS, target: NodeType.EXIT_NODE, reverse: true },
    { id: EdgeType.EXIT_NODE_QUAD100, source: NodeType.EXIT_NODE, target: NodeType.QUAD100, label: 'WireGuard Tunnel', reverse: true },
    { id: EdgeType.QUAD100_DEVICE, source: NodeType.QUAD100, target: NodeType.DEVICE, reverse: true },
  ];

  // Define the steps of the DNS flow
  const steps: Step[] = [
    {
      title: "Exit Node DNS Flow",
      description: "How Tailscale routes DNS queries through exit nodes for privacy and security",
      activeNodes: [],
      activeEdges: [],
    },
    {
      title: "1. DNS Query Initiated",
      description: "Your device needs to resolve a domain (e.g., example.com)",
      activeNodes: [NodeType.DEVICE],
      activeEdges: [],
    },
    {
      title: "2. Quad100 Captures Query",
      description: "Tailscale's Quad100 resolver intercepts all DNS queries",
      activeNodes: [NodeType.DEVICE, NodeType.QUAD100],
      activeEdges: [EdgeType.DEVICE_QUAD100],
    },
    {
      title: "3. Query Tunneled to Exit Node",
      description: "The query is securely sent through WireGuard to the exit node",
      activeNodes: [NodeType.DEVICE, NodeType.QUAD100, NodeType.EXIT_NODE],
      activeEdges: [EdgeType.DEVICE_QUAD100, EdgeType.QUAD100_EXIT_NODE],
    },
    {
      title: "4. Exit Node Resolves Query",
      description: "Exit node forwards the query to its configured DNS resolver",
      activeNodes: [NodeType.EXIT_NODE, NodeType.DNS],
      activeEdges: [EdgeType.EXIT_NODE_DNS],
    },
    {
      title: "5. DNS Response Received",
      description: "The resolver sends the IP address back to the exit node",
      activeNodes: [NodeType.EXIT_NODE, NodeType.DNS],
      activeEdges: [EdgeType.DNS_EXIT_NODE],
    },
    {
      title: "6. Response Returned to Device",
      description: "The DNS response is securely tunneled back to your device",
      activeNodes: [NodeType.DEVICE, NodeType.QUAD100, NodeType.EXIT_NODE],
      activeEdges: [EdgeType.EXIT_NODE_QUAD100, EdgeType.QUAD100_DEVICE],
    },
  ];

  const currentStepData = steps[currentStep];

  // Helper function to check if a node is active
  const isNodeActive = (nodeId: NodeType): boolean => {
    return currentStepData.activeNodes.includes(nodeId);
  };

  // Helper function to check if an edge is active
  const isEdgeActive = (edgeId: EdgeType): boolean => {
    return currentStepData.activeEdges.includes(edgeId);
  };

  // Helper function to get node by id
  const getNode = (id: NodeType): Node | undefined => {
    return nodes.find(node => node.id === id);
  };

  // Simple table for split DNS view
  const SplitDNSView = () => (
    <div className="bg-white rounded-lg p-4 border border-ts-grey-200 max-w-md mx-auto">
      <h3 className="text-center font-medium mb-4 text-ts-grey-700">Split DNS Configuration</h3>
      <table className="w-full text-sm">
        <thead className="bg-ts-grey-100">
          <tr>
            <th className="py-2 px-3 text-left">Domain Pattern</th>
            <th className="py-2 px-3 text-left">Resolver</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-ts-grey-100">
            <td className="py-2 px-3">*.internal.example.com</td>
            <td className="py-2 px-3 text-ts-blue-400">Internal DNS</td>
          </tr>
          <tr className="border-b border-ts-grey-100">
            <td className="py-2 px-3">*.example.com</td>
            <td className="py-2 px-3 text-ts-green-400">Exit Node</td>
          </tr>
          <tr>
            <td className="py-2 px-3">* (all other domains)</td>
            <td className="py-2 px-3 text-ts-grey-500">Default Resolver</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  // Generate path between two nodes for edges
  const generatePath = (sourceId: NodeType, targetId: NodeType, reverse = false): Point[] => {
    const source = getNode(sourceId);
    const target = getNode(targetId);

    if (!source || !target) {
      return [];
    }

    let points: Point[] = [];

    // If it's a vertical connection (device-quad100 or exitNode-dns)
    if ((sourceId === NodeType.DEVICE && targetId === NodeType.QUAD100) ||
        (sourceId === NodeType.EXIT_NODE && targetId === NodeType.DNS) ||
        (sourceId === NodeType.QUAD100 && targetId === NodeType.DEVICE) ||
        (sourceId === NodeType.DNS && targetId === NodeType.EXIT_NODE)) {
      points = [
        { x: source.x, y: source.y },
        { x: source.x, y: (source.y + target.y) / 2 },
        { x: source.x, y: target.y }
      ];
    }
    // If it's a horizontal connection (quad100-exitNode or exitNode-quad100)
    else {
      points = [
        { x: source.x, y: source.y },
        { x: (source.x + target.x) / 2, y: source.y },
        { x: (source.x + target.x) / 2, y: target.y },
        { x: target.x, y: target.y }
      ];
    }

    // For reverse paths (responses), flip the points array
    return reverse ? [...points].reverse() : points;
  };

  const handleNext = () => {
    setCurrentStep(prev => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  const handlePrevious = () => {
    setCurrentStep(prev => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold text-ts-grey-700 mb-4 text-center">
        Tailscale DNS with Exit Nodes
      </h2>

      {/* Progress indicator */}
      <div className="mb-6 flex justify-between items-center">
        <span className="text-sm text-ts-grey-500">Step {currentStep + 1} of {steps.length}</span>
        <div className="w-2/3 h-2 bg-ts-grey-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-ts-blue-300 transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Main visualization */}
      <div className="mb-6">
        {currentStepData.isSplitDNS ? (
          <SplitDNSView />
        ) : (
          <svg width={width} height={height} className="mx-auto">
            <Group>
              {/* Draw edges first (so they appear behind nodes) */}
              {edges.map(edge => {
                const isActive = isEdgeActive(edge.id);
                const points = generatePath(edge.source, edge.target, edge.reverse);

                return (
                  <React.Fragment key={edge.id}>
                    <LinePath
                      data={points}
                      x={d => d.x}
                      y={d => d.y}
                      stroke={isActive ? "#6395F5" : "#DAD6D5"}
                      strokeWidth={isActive ? 2 : 1}
                      curve={curveBasis}
                      strokeDasharray={edge.reverse ? "5,5" : undefined}
                    />

                    {/* Edge label for WireGuard Tunnel */}
                    {edge.label && isActive && (
                      <Text
                        x={(points[1].x + points[2].x) / 2}
                        y={(points[1].y + points[2].y) / 2 - 10}
                        textAnchor="middle"
                        fontSize={10}
                        fill="#706E6D"
                      >
                        {edge.label}
                      </Text>
                    )}

                    {/* Arrow direction indicator */}
                    {isActive && (
                      <circle
                        cx={edge.reverse ? points[1].x : points[points.length - 2].x}
                        cy={edge.reverse ? points[1].y : points[points.length - 2].y}
                        r={3}
                        fill="#6395F5"
                      />
                    )}
                  </React.Fragment>
                );
              })}

              {/* Draw nodes */}
              {nodes.map(node => {
                const isActive = isNodeActive(node.id);
                const Icon = node.icon;

                return (
                  <Group key={node.id} top={node.y} left={node.x}>
                    {/* Node background circle */}
                    <circle
                      r={20}
                      fill={isActive ? "#6395F5" : "#F9F7F6"}
                      stroke={isActive ? "#3B51AA" : "#DAD6D5"}
                      strokeWidth={1}
                    />

                    {/* Node icon */}
                    <foreignObject
                      x={-12}
                      y={-12}
                      width={24}
                      height={24}
                    >
                      <div className="flex items-center justify-center w-full h-full">
                        <Icon size={16} color={isActive ? "#FFFFFF" : "#706E6D"} />
                      </div>
                    </foreignObject>

                    {/* Node label */}
                    <Text
                      dy={36}
                      textAnchor="middle"
                      fontSize={12}
                      fontWeight={isActive ? "bold" : "normal"}
                      fill={isActive ? "#3B51AA" : "#706E6D"}
                    >
                      {node.label}
                    </Text>
                  </Group>
                );
              })}
            </Group>
          </svg>
        )}
      </div>

      {/* Step description */}
      <div className="p-4 mb-6 rounded-lg border border-ts-grey-200 bg-ts-blue-50">
        <h3 className="font-semibold mb-2 text-ts-blue-400">
          {currentStepData.title}
        </h3>
        <p className="text-ts-grey-600">{currentStepData.description}</p>
      </div>

      {/* Navigation controls */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 bg-ts-grey-100 text-ts-grey-600 rounded hover:bg-ts-grey-200 transition-colors"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-ts-blue-300 text-white rounded hover:bg-ts-blue-400 transition-colors"
        >
          {currentStep === steps.length - 1 ? "Restart" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default ExitNodeDNSFlow;