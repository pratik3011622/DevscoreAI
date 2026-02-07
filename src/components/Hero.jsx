import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden bg-black">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8 z-10">
                    <div className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-4">
                        ✨ Revolutionizing Recruitment with AI
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                        Hire on <span className="text-purple-400">Skill</span>, <br />
                        Not Just Resumes.
                    </h1>

                    <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                        Our AI analyzes role requirements to generate role-specific assessments, ensuring you find the perfect match based on actual capability.
                    </p>

                    <div className="flex items-center space-x-8 pt-4">
                        <button className="bg-white text-black text-sm font-bold px-8 py-4 rounded-lg">
                            Get Started
                        </button>
                    </div>

                    <div className="flex items-center space-x-8 pt-8">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`w-10 h-10 rounded-full border-2 border-black bg-gray-700 flex items-center justify-center text-xs text-white`}>
                                    User
                                </div>
                            ))}
                        </div>
                        <div className="text-sm text-gray-400">
                            Trusted by <span className="text-white font-semibold">500+</span> companies
                        </div>
                    </div>
                </div>

                {/* Right Content - 3D Model */}
                <div className="relative flex justify-center items-center h-[600px] w-full">
                    {/*
                        SPLINE 3D SCENE INSTRUCTIONS:
                        
                        Create this scene in Spline (spline.design):
                        
                        1. Object: Rounded Cube
                           - Top Surface: Matte black, subtle embossed geometric logo
                           - Sides: Glass-like, transparent, rainbow/prism light refraction
                           
                        2. Materials:
                           - Top: Matte black (#1A1A1A), slight roughness
                           - Sides: Glass material with IOR ~1.5, transmission ~0.9
                           - Rainbow effect: Add colored lights around edges (blue, red, yellow)
                           
                        3. Lighting:
                           - Dark studio environment (pure black background)
                           - Soft studio lighting from top
                           - Colorful rim lights on glass edges
                           
                        4. Animation:
                           - Slow floating motion (Y-axis bob)
                           - Gentle continuous rotation on Y-axis
                           - Smooth ease-in-out curves
                           
                        5. Export:
                           - Publish scene and copy the URL here
                           - Use: <Spline scene="YOUR_PUBLISHED_SCENE_URL" />
                    */}
                    
                    {/* Placeholder visual while 3D scene loads */}
                    <div className="w-full h-full flex items-center justify-center border border-white/10 rounded-3xl bg-gradient-to-br from-[#1A1A2E] to-[#0A0A0A] relative overflow-hidden group">
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"></div>
                        
                        {/* Floating cube visualization */}
                        <div className="relative w-48 h-48 perspective-1000">
                            <div className="w-full h-full relative transform-style-3d animate-float">
                                {/* Cube faces */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 border border-white/10 backdrop-blur-sm rounded-2xl transform rotate-y-12"></div>
                                <div className="absolute inset-0 bg-gradient-to-bl from-pink-500/10 via-transparent to-cyan-500/10 border border-white/5 backdrop-blur-sm rounded-2xl transform -rotate-y-12 translate-z-10"></div>
                            </div>
                        </div>
                        
                        {/* Reflection effects */}
                        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
                        <div className="absolute top-0 right-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl"></div>
                        
                        {/* Loading text */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-500 text-xs">
                            3D Scene Loading...
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
