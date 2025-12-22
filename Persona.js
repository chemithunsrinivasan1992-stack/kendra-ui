import React from "react";
import { useNavigate } from "react-router-dom";
const Persona = () => {
    const navigate = useNavigate();
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">SELECT YOUR PERSONA</h1>
            <p className="text-center"  style={{color:'#555555'}}>Experience our product page tailored to your shopping style</p>
            <div className="row g-4">
                {/* TikTok Explorer Card */}
                <div className="col-md-3 col-sm-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-3">
                                TikTok Explorer
                            </h5>

                            <p><strong>Demographics:</strong><br />Cis female, early 20s</p>

                            <p><strong>Device:</strong><br />Mac – Safari</p>

                            <p><strong>Source:</strong><br />Discovered via TikTok</p>

                            <p><strong>Intent:</strong><br />Low purchase intent, exploring mode</p>
                            <hr/>
                            <p><strong>Behavior:</strong><br />
                                Visual-first, expects video content, easily distracted
                            </p>

                            <p><strong>Needs:</strong><br />
                                Inspiration over information, styling ideas, payment flexibility
                            </p>
                            <button className="btn btn-danger" onClick={() => navigate("/tiktok")}>SELECT PERSONA</button>
                        </div>
                    </div>
                </div>

                {/* Other Persona Cards */}
                <div className="col-md-3 col-sm-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-3">
                                Loyal Returner
                            </h5>

                            <p><strong>Demographics:</strong><br />Cis female, mid-30s</p>

                            <p><strong>Device:</strong><br />Windows Desktop</p>

                            <p><strong>Source:</strong><br />Meta ad Click</p>

                            <p><strong>Intent:</strong><br />Quality Product, exploring mode</p>
                            <hr/>
                            <p><strong>Behavior:</strong><br />
                                Knows the brand,efficient shopper,values quality
                            </p>

                            <p><strong>Needs:</strong><br />
                                Personal recommendations,recogonition,trust
                            </p>
                            <button className="btn btn-info" onClick={() => navigate("/return")} style={{color:'#ffffff'}}>SELECT PERSONA</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-3">
                                Research Driven - Searcher
                            </h5>

                            <p><strong>Demographics:</strong><br />Unknown Age/Gender</p>

                            <p><strong>Device:</strong><br />Android Chrome</p>

                            <p><strong>Source:</strong><br />Google search result</p>

                            <p><strong>Intent:</strong><br />Comparison shopping</p>
                            <hr/>
                            <p><strong>Behavior:</strong><br />
                               Detail-oriented, reads reviews, compares specs
                            </p>

                            <p><strong>Needs:</strong><br />
                                Complete product information, reviews, size accuracy
                            </p>
                            <button className="btn btn-warning" onClick={() => navigate("/research")}  style={{color:'#ffffff'}}>SELECT PERSONA</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-3">
                                Ai Assitant
                            </h5>

                            <p><strong>Demographics:</strong><br />Female , unknown age</p>

                            <p><strong>Device:</strong>Mac/Windows</p>

                            <p><strong>Source:</strong><br />Chatgpt,Gemini,Perplexity Recommendations</p>

                            <p><strong>Intent:</strong><br />Investigation,Continous discussions</p>
                            <hr/>
                            <p><strong>Behavior:</strong><br />
                                Analytical, validates AI suggestions, values expertise
                            </p>

                            <p><strong>Needs:</strong><br/>
                               Technical specs, comparison context, sustainability info
                            </p>
                            <button className="btn btn-success" onClick={() => navigate("/ai")}>SELECT PERSONA</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Persona;
