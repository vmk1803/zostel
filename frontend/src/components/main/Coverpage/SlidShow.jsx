import './CoverPage.css'

import { CoverPage } from './Coverpage'
import {Searchbox} from "../searchBox/Searchbox"

export const SlideShow = () => {
    

    return (
        <div >
            <CoverPage></CoverPage>
          <h1 className="live-it-now">Live it. Now</h1>
          <Searchbox></Searchbox>
        </div>
    )
}


