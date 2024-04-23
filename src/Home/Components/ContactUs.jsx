// eslint-disable-next-line no-unused-vars
import React from "react";

const ContactUsPage = () => {
    return (
        <section className="py-4" id="kontak-kami">
            <div className="container">
                <h2 className="mt-5">Contact us</h2>
                <div className="row">
                    <div className="col-8 col-sm-12">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We`ll never share your email with anyone
                                    else.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputComments">Comments</label>
                                <textarea className="form-control" placeholder="Leave a comment here" rows={6}
                                          id="exampleInputComments"></textarea>
                            </div>
                            <button type="submit" className="btn btn-light rounded-2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
};

export default ContactUsPage;