import './CardProfileDescription.css'

export function CardProfileDescription () {
  return (
    <div className='card-profile-description'>
      <div>
        <h2 className='card-profile-description__title'>Hi, I'm Dario 👌</h2>
        <p className='card-profile-description__text'>
          Frontend Developer passionate about creating engaging web experiences.  I craft visually stunning and user-friendly websites. Let's collaborate to bring your digital vision to life!
        </p>
      </div>
      <div className='card-knowledges'>
        <h2 className='card-profile-description__title'>Knowledges</h2>
        <div className='div-knowledges'>
          <div className='div-knowledges__target'><h4>Programming Languages</h4>
            <div><p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Java</p>
              <p>Sass</p>
            </div>
          </div>
          <div className='div-knowledges__target'><h4>FrameWorks</h4>
            <div><p>React</p>
              <p>Bootstrap</p>
              <p>React Native</p>
            </div>
          </div>
          <div className='div-knowledges__target div-knowledges__item'><h4>Tools</h4>
            <div><p>Git</p>
              <p>GitHub</p>
              <p>VS Code</p>
              <p>Android Studio</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
