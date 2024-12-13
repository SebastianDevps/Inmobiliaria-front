import React from 'react'
import img from '../../images/loadingBg.png'

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-gradient-to-b from-white to-gray-50 z-50 
                        flex items-center justify-center backdrop-blur-sm">
            <div className="relative backdrop-blur-md">
                {/* Logo casa animado */}
                <div className="w-24 h-24 animate-float mx-auto 
                              transform hover:scale-105 transition-transform">
                    <img 
                        src={img} 
                        alt="Loading" 
                        className="w-full h-full"
                    />
                </div>
                
                {/* Texto animado */}
                <div className="mt-4 flex flex-col items-center gap-2 text-center">
                    <div className="flex gap-2 justify-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 
                                      rounded-full animate-bounce [animation-delay:-0.3s]
                                      shadow-sm"></div>
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 
                                      rounded-full animate-bounce [animation-delay:-0.15s]
                                      shadow-sm"></div>
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 
                                      rounded-full animate-bounce 
                                      shadow-sm"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}