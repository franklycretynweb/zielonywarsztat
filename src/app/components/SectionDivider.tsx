/**
 * SectionDivider — 3-layer organic SVG wave divider
 *
 * Creates a depth illusion at section boundaries. Paths fill from the TOP
 * of the SVG down to a wavy bottom edge. The fill colors match the
 * PREVIOUS section, so the dark/light color appears to "wave down" into
 * the current section with layered depth.
 *
 * Place at the TOP of the section being transitioned INTO.
 */

type DividerColors = {
    layer1: string; // back layer — lightest variant of "from" color (atmospheric perspective)
    layer2: string; // middle layer
    layer3: string; // front layer — exact "from" section color (closest to viewer)
};

const VARIANTS: Record<string, DividerColors> = {
    // TrustBar (sage-800 #2d351f) → Stats (linen-200)
    "trustbar-to-stats": {
        layer1: "#485536",
        layer2: "#3a4429",
        layer3: "#2d351f",
    },
    // Services (sage-100 #e6ece0) → WhyGarden (forest #2f3c23)
    "services-to-whygarden": {
        layer1: "#c8d6b8",
        layer2: "#d7e1cc",
        layer3: "#e6ece0",
    },
    // WhyGarden (forest #2f3c23) → MeetPiotr (sage-100)
    "whygarden-to-meetpiotr": {
        layer1: "#485536",
        layer2: "#3a4429",
        layer3: "#2f3c23",
    },
    // MeetPiotr (sage-100 #e6ece0) → WhyUs (forest)
    "meetpiotr-to-whyus": {
        layer1: "#c8d6b8",
        layer2: "#d7e1cc",
        layer3: "#e6ece0",
    },
    // WhyUs (forest #2f3c23) → HowItWorks (sage-100)
    "whyus-to-howitworks": {
        layer1: "#485536",
        layer2: "#3a4429",
        layer3: "#2f3c23",
    },
    // HowItWorks (sage-100 #e6ece0) → Testimonials (forest)
    "howitworks-to-testimonials": {
        layer1: "#c8d6b8",
        layer2: "#d7e1cc",
        layer3: "#e6ece0",
    },
    // Testimonials (forest #2f3c23) → FAQ (sage-100)
    "testimonials-to-faq": {
        layer1: "#485536",
        layer2: "#3a4429",
        layer3: "#2f3c23",
    },
    // FAQ (sage-100 #e6ece0) → ServiceArea (forest)
    "faq-to-servicearea": {
        layer1: "#c8d6b8",
        layer2: "#d7e1cc",
        layer3: "#e6ece0",
    },
    // ServiceArea (forest #2f3c23) → Contact (sage-100)
    "servicearea-to-contact": {
        layer1: "#485536",
        layer2: "#3a4429",
        layer3: "#2f3c23",
    },
    // Contact (sage-100 #e6ece0) → Footer (sage-900 #1e2415)
    "contact-to-footer": {
        layer1: "#c8d6b8",
        layer2: "#d7e1cc",
        layer3: "#e6ece0",
    },
    // TrustBar (sage-800 #2d351f) → Services (sage-100 #e6ece0)
    "trustbar-to-services": {
        layer1: "#485536",
        layer2: "#3a4429",
        layer3: "#2d351f",
    },
    // MeetPiotr (sage-100 #e6ece0) → Testimonials (forest #2f3c23)
    "meetpiotr-to-testimonials": {
        layer1: "#c8d6b8",
        layer2: "#d7e1cc",
        layer3: "#e6ece0",
    },
};

/*
 * Paths fill from TOP (y=0) down to a wavy edge, then close back to top.
 * viewBox = 0 0 1440 120
 *
 * Layer 1 (back, drawn first): deepest dip → most "from" color visible
 * Layer 3 (front, drawn last): shallowest → sits on top, cleanest edge
 *
 * Each layer has a different wave rhythm to create visual depth.
 */
const PATHS = {
    layer1:
        "M0,0 L1440,0 L1440,56 C1300,76 1140,36 960,60 C780,80 620,30 440,54 C260,74 100,40 0,64 Z",
    layer2:
        "M0,0 L1440,0 L1440,38 C1340,56 1120,22 940,42 C720,58 540,18 360,36 C180,52 60,26 0,44 Z",
    layer3:
        "M0,0 L1440,0 L1440,22 C1280,36 1060,12 860,26 C660,38 480,10 300,22 C140,34 40,14 0,26 Z",
};

interface SectionDividerProps {
    variant: keyof typeof VARIANTS;
    className?: string;
}

export default function SectionDivider({
    variant,
    className = "",
}: SectionDividerProps) {
    const colors = VARIANTS[variant];
    if (!colors) return null;

    return (
        <div
            className={`section-divider ${className}`}
            style={{
                position: "absolute",
                top: -1,
                left: 0,
                right: 0,
                width: "100%",
                overflow: "hidden",
                lineHeight: 0,
                zIndex: 1,
            }}
        >
            <svg
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    display: "block",
                    width: "100%",
                    height: "clamp(50px, 6vw, 90px)",
                }}
            >
                <path d={PATHS.layer1} fill={colors.layer1} />
                <path d={PATHS.layer2} fill={colors.layer2} />
                <path d={PATHS.layer3} fill={colors.layer3} />
            </svg>
        </div>
    );
}
