import SubHeroimg1 from '/src/assets/Sub-Hero1.jpg';
import SubHeroimg2 from '/src/assets/Sub-Hero2.jpg';
import SubHeroimg3 from '/src/assets/Sub-Hero3.jpg';
import SubHeroimg4 from '/src/assets/Sub-Hero4.jpg';

function SubHerose() {
    return (
        <>
            <section className="recommended">
                <h1 className="recommended__title"></h1>
                <p></p>
                <div className="recommended__container">

                    <div className="course__card">
                        <img src={SubHeroimg1} alt="Python Data Visualization course cover" />
                        <h3>2023 Python Data Visualization</h3>
                        <p>Col Steels</p>
                        <p><b>4.9 ⭐⭐⭐⭐</b></p>
                        <p><b>₹ 449</b> <del>₹ 999</del></p>
                    </div>

                    <div className="course__card">
                        <img src={SubHeroimg2} alt="Web Development Bootcamp 2024 course cover" />
                        <h3>Web Development Bootcamp</h3>
                        <p>John Smith</p>
                        <p><b>3.8 ⭐⭐⭐</b></p>
                        <p><b>₹ 599</b> <del>₹ 1299</del></p>
                    </div>

                    <div className="course__card">
                        <img src={SubHeroimg3} alt="Master UI/UX Designing Figma course cover" />
                        <h3>Master UI/UX Designing Figma</h3>
                        <p>Iorel Cab</p>
                        <p><b>4.3 ⭐⭐⭐</b></p>
                        <p><b>₹ 489</b> <del>₹ 1299</del></p>
                    </div>

                    <div className="course__card">
                        <img src={SubHeroimg4} alt="Full Stack with Python course cover" />
                        <h3>Full Stack with Python</h3>
                        <p>Col Steels</p>
                        <p><b>3.9 ⭐⭐⭐</b></p>
                        <p><b>₹ 429</b> <del>₹ 899</del></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SubHerose
