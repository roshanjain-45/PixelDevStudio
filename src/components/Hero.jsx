import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="flex min-h-screen items-center justify-between px-6 lg:px-24">
      <div className="flex-1">
        <img 
          src="src\assets\6.png" 
          alt="Dinosaur Logo"
          className="w-full max-w-xl mx-auto"
        />
      </div>
      
      <div className="flex-1">
        <pre className="bg-gray-800 text-gray-100 p-6 rounded-lg shadow-lg font-mono text-sm">
       
{`public class PixelDevStudio {
    public static void main(String[] args) {
        System.out.println("Welcome to Pixel Dev Studio");
        System.out.println("Designing Your Vision, 
                                              Developing Your Success");
    }
}`}
         
        </pre>
      </div>
    </div>
    </>
  )
}

export default Hero