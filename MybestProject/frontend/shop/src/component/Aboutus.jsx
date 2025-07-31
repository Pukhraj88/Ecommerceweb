import "./Aboutus.css";
import BuildingProcess from "./BuildingProcess";

export const Aboutus = () => {
    return (
        <div className="owncontainer aboutus-scoped">
            <div className=" aboutuspage" id="handleAboutUsPage">
                <img src="logo.png" alt="About Us Image" />
                    <p id="aboutustitle">Dhram Kanta</p>
                    <div className="aboutuscontent">
                        <h3>Welcome to HR Dhram Kanta, your trusted destination for high-quality building materials.</h3>
                        <h2>Our Mission</h2>
                        <p className="text-base sm:text-lg">Our mission is rooted in delivering excellence to our valued customers. With a focus on
                            quality and reliability, we ensure that our bricks are not just building blocks but a
                            foundation for your dreams. The cement we offer is sourced from reputable suppliers,
                            guaranteeing strength and longevity in every mix. Additionally, our premium
                            construction soil selection caters to the diverse needs of your projects, promising
                            optimal fertility and composition.
                        </p>
                        <p>Choose HR Dhram Kanta for your building material needs, where quality meets integrity,
                            and your construction journey is our top priority. Build with confidence, build with
                            HR Dhram Kanta.
                        </p>
                    </div>
            </div>

<BuildingProcess />

        </div>
    );
}


