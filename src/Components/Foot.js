import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/foot.css'

const Foot = () => {
    return (
        <div class="ui inverted segment ui sticky" style={{height: '100px'}}>
          <div class="ui container">
            <div class="ui inverted secondary menu">
              <div>
                <h5><i class="plane icon app-icon"></i> Hunter Posey <i class="plane icon app-icon"></i></h5>
              </div>
              <div>
                  <Link to='/home/about'><h5><u>About</u></h5></Link>
                  <br></br>
                  <Link to='/home/analytics'><h5><u>Analytics</u></h5></Link>
              </div>
              <div class="right item">
                <a href="https://www.linkedin.com/in/isaac-posey">
                  <i class="linkedin icon"></i>
                </a>
                <a href="https://ihposey.medium.com/">
                  <i class="medium m icon"></i>
                </a>
                <a href="https://github.com/ihposey12">
                  <i class="github icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
    )
}
export default Foot