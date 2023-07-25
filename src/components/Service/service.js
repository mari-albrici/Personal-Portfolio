

/*--------------------
* Service Section
----------------------*/
function Service(props) {
    return (
        <>
            <div className="col-md-6">
                <div className={props.id + " feature-box-01"}>
                    <div className="icon"><i className="bi bi-phone"></i></div>
                    <div className="feature-content">
                        <h5>{props.title}</h5>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </>

    );
}

/*--------------------
* Service List Section
----------------------*/
export default function ServiceList() {
    const service_list = [
        {id:'bg-1', title:'Web Design', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id:'bg-2', title:'Development', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id:'bg-3', title:'SEO Marketing', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id:'bg-4', title:'Web Design', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id:'bg-5', title:'Development', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id:'bg-6', title:'SEO Marketing', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
    return (
        <>
           <section data-scroll-data="1" id="services" className="section services-section bg-gray" style={{ "backgroundImage": "url(/img/effect/bg-effect-1.png)", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
                <div className="container">
                    <div className="row section-heading justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h3><span>My Services</span></h3>
                        </div>
                    </div>
                    <div className="row gy-4">
                        {
                            service_list.map((val, i)=>{
                                return <Service key={i} id={val.id} title={val.title} description={val.description} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}
