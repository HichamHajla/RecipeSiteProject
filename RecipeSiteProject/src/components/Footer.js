

const Footer =() =>{
    return(
        <div className="Footer">
            <div className="infoFooter">
                <h3>Contact information</h3>
                <p>HD Kitchen</p><p></p><p> 3 Rue Maillard</p><p> 75011 Paris</p> <p>France</p><p>+33 (0) 619 193 088</p>
                <h3>Follow us</h3>
                <ul> 
                    <li> <a style={{textDecoration:"none", color : "rgb(67,163,230)"}} href="https://twitter.com/">Twitter</a></li>
                    <li> <a style={{textDecoration:"none", color : "rgb(67,163,230)"}} href="https://www.facebook.com/">Facebook</a></li>
                    <li> <a style={{textDecoration:"none", color : "rgb(67,163,230)"}} href="https://www.instagram.com/">Instagram</a></li>
                </ul>
            </div>
            <div>
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047744348!2d2.3354330160472316!3d48.87456857928921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sIronhack!5e0!3m2!1sen!2ses!4v1495208746099" className="map-frame" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Footer