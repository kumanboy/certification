"use client";

export default function DiagramPlaceholder() {
    return (
        <div className="w-full rounded-lg border bg-white p-3">
            <svg viewBox="0 0 600 200" className="h-48 w-full" role="img" aria-label="Oqim: 1 → 2 → 3">
                <defs>
                    <marker id="arr" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" />
                    </marker>
                </defs>
                <rect x="40"  y="60" width="120" height="60" rx="12" fill="#f3f4f6" stroke="#9ca3af"/>
                <rect x="240" y="60" width="120" height="60" rx="12" fill="#f3f4f6" stroke="#9ca3af"/>
                <rect x="440" y="60" width="120" height="60" rx="12" fill="#f3f4f6" stroke="#9ca3af"/>
                <text x="100" y="95" textAnchor="middle" fontSize="18">1</text>
                <text x="300" y="95" textAnchor="middle" fontSize="18">2</text>
                <text x="500" y="95" textAnchor="middle" fontSize="18">3</text>
                <line x1="160" y1="90" x2="240" y2="90" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arr)" />
                <line x1="360" y1="90" x2="440" y2="90" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arr)" />
            </svg>
            <p className="mt-2 text-center text-sm text-gray-600">Oqim: 1 → 2 → 3</p>
        </div>
    );
}
