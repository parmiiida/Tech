import React from 'react'

const Code = () => {
  return (
    <div className='text-zinc-600/50 flex text-[13px] '>

        <div className='z-10 relative'>
          <div className='h-[1px] violet-gradient-2 w-[500px] bg-zinc-600/50'/>
          <div className='h-[1px] violet-gradient-2 w-[500px] bg-zinc-600/50 mt-2'/>
          <div className='w-[1px] h-[400px] violet-gradient bg-zinc-600/50'/>
        </div>

        <div className="absolute pt-5 pl-5 w-[500px] opacity-75">
          <p className="text-gray-200 space-y-2 font-mono">
            <span className="text-purple-600">&lt;div </span>
            <span className="text-purple-300">class='container'</span>
            <span className="text-purple-600">&gt;</span>
            <br />
            &nbsp;&nbsp;<span className="text-purple-600">&lt;h1 </span>
            <span className="text-purple-300">class='text-4xl font-bold'</span>
            <span className="text-purple-600">&gt;</span>
            <span className="text-white">Empowering Ideas, Crafting Digital Excellence</span>
            <span className="text-purple-600">&lt;/h1&gt;</span>
            <br />
            &nbsp;&nbsp;<span className="text-purple-600">&lt;p </span>
            <span className="text-purple-300">class='text-lg text-gray-300 mt-2'</span>
            <span className="text-purple-600">&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-300">
              Partnering with companies and individuals to design and develop stunning websites
              <br />
              and apps. Combining creativity with cutting-edge technology to bring your vision to life.
            </span>
            <br />
            &nbsp;&nbsp;<span className="text-purple-600">&lt;/p&gt;</span>
            <br />
            &nbsp;&nbsp;<span className="text-purple-600">&lt;ul </span>
            <span className="text-purple-300">class='list-disc pl-5 text-gray-300'</span>
            <span className="text-purple-600">&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">&lt;li&gt;</span>
            <span className="text-gray-300">Modern and responsive designs</span>
            <span className="text-purple-600">&lt;/li&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">&lt;li&gt;</span>
            <span className="text-gray-300">Custom web and app development</span>
            <span className="text-purple-600">&lt;/li&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">&lt;li&gt;</span>
            <span className="text-gray-300">SEO-friendly and scalable solutions</span>
            <span className="text-purple-600">&lt;/li&gt;</span>
            <br />
            &nbsp;&nbsp;<span className="text-purple-600">&lt;/ul&gt;</span>
            <br />
            &nbsp;&nbsp;<span className="text-purple-600">&lt;footer </span>
            <span className="text-purple-300">class='text-sm text-gray-400 mt-4'</span>
            <span className="text-purple-600">&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">
              Ready to bring your ideas to life? Let's build something amazing together.
            </span>
            <br />
            &nbsp;&nbsp;<span className="text-purple-600">&lt;/footer&gt;</span>
            <br />
            <span className="text-purple-600">&lt;/div&gt;</span>
          </p>
        </div>
    </div>
  )
}

export default Code
