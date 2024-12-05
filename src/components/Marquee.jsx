const Marquee = () => {
    return (
        <div className="marquee-container  ">
            <svg className="w-full "  height="200px" viewBox="0 0 1200 100">
                <defs>
                    <path id="textPath" d="M -50 50 Q 200 -50, 400 50 Q 600 150, 800 50 Q 1000 -50, 1200 50" fill="transparent" />
                </defs>
                <path d="M -50 50 Q 200 -50, 400 50 Q 600 150, 800 50 Q 1000 -50, 1200 50" fill="none" stroke="#B5F652" strokeWidth="2.5rem" />
                <text fontSize="0.8rem" fill="#9381ff" className="small text-white text-xl" dominantBaseline="middle" textAnchor="middle">
                    <textPath href="#textPath">
                        welcome
                    </textPath>
                </text>
            </svg>
        </div>
    );
};

export default Marquee;
