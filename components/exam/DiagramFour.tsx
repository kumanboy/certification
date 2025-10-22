"use client";

type Props = {
    center: string;
    top: string;
    right: string;
    bottom: string;
    left: string;
};

export default function DiagramFour({ center, top, right, bottom, left }: Props) {
    return (
        <div className="mx-auto mt-3 grid w-full max-w-xl grid-cols-3 grid-rows-3 gap-3">
            {/* top */}
            <div className="col-start-2 row-start-1 flex items-center justify-center">
                <Box>{top}</Box>
            </div>

            {/* left */}
            <div className="col-start-1 row-start-2 flex items-center justify-center">
                <Box>{left}</Box>
            </div>

            {/* center */}
            <div className="col-start-2 row-start-2 flex items-center justify-center">
                <Box highlight>{center}</Box>
            </div>

            {/* right */}
            <div className="col-start-3 row-start-2 flex items-center justify-center">
                <Box>{right}</Box>
            </div>

            {/* bottom */}
            <div className="col-start-2 row-start-3 flex items-center justify-center">
                <Box>{bottom}</Box>
            </div>
        </div>
    );
}

function Box({
                 children,
                 highlight = false,
             }: {
    children: React.ReactNode;
    highlight?: boolean;
}) {
    return (
        <div
            className={[
                "rounded-xl border px-4 py-2 text-center text-sm leading-snug",
                highlight ? "bg-amber-50 border-amber-300 font-semibold" : "bg-white",
            ].join(" ")}
        >
            {children}
        </div>
    );
}
