import React from "react";

function UpdateService() {
    return (
        <div>
        <style dangerouslySetInnerHTML={{__html: "\n    body {\n      background: #64ccf1;\n      font-family: 'Roboto', sans-serif;\n    }\n    .form-control {\n      font-size: 16px;\n      transition: all 0.4s;\n      box-shadow: none;\n    }\n    .form-control:focus {\n      border-color: #64ccf1;\n    }\n    .form-control, .btn {\n      border-radius: 50px;\n      outline: none !important;\n    }\n    .signup-form {\n      width: 480px;\n      margin: 0 auto;\n      padding: 30px 0;\n    }\n    .signup-form form {\n      border-radius: 5px;\n      margin-bottom: 20px;\n      background: #fff;\n      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n      padding: 40px;\n    }\n    .signup-form a {\n      color: #64ccf1;\n    }\n    .signup-form h2 {\n      text-align: center;\n      font-size: 34px;\n      margin: 10px 0 15px;\n    }\n    .signup-form .hint-text {\n      color: #999;\n      text-align: center;\n      margin-bottom: 20px;\n    }\n    .signup-form .form-group {\n      margin-bottom: 20px;\n    }\n    .signup-form .btn {\n      font-size: 18px;\n      line-height: 26px;\n      font-weight: bold;\n      text-align: center;\n    }\n    .signup-btn {\n      text-align: center;\n      border-color: #64ccf1;\n      transition: all 0.4s;\n      background-color: #64ccf1;\n    }\n    .signup-btn:hover {\n      background-color:#007bff;\n      opacity: 0.8;\n    }\n    .or-seperator {\n      margin: 50px 0 15px;\n      text-align: center;\n      border-top: 1px solid #e0e0e0;\n    }\n    .or-seperator b {\n      padding: 0 10px;\n      width: 40px;\n      height: 40px;\n      font-size: 16px;\n      text-align: center;\n      line-height: 40px;\n      background: #fff;\n      display: inline-block;\n      border: 1px solid #e0e0e0;\n      border-radius: 50%;\n      position: relative;\n      top: -22px;\n      z-index: 1;\n    }\n    .social-btn .btn {\n      color: #fff;\n      margin: 10px 0 0 15px;\n      font-size: 15px;\n      border-radius: 50px;\n      font-weight: normal;\n      border: none;\n      transition: all 0.4s;\n    }\n    .social-btn .btn:first-child {\n      margin-left: 0;\n    }\n    .social-btn .btn:hover {\n      opacity: 0.8;\n    }\n    .social-btn .btn-primary {\n      background: #507cc0;\n    }\n    .social-btn .btn-info {\n      background: #64ccf1;\n    }\n    .social-btn .btn-danger {\n      background: #df4930;\n    }\n    .social-btn .btn i {\n      float: left;\n      margin: 3px 10px;\n      font-size: 20px;\n    }\n  " }} />
        <div className="signup-form">
          <form action="/examples/actions/confirmation.php" method="post">
            <h2>Update an Room</h2>
            <div className="or-seperator" />
            <br />
            <br />
            <br />
            <div className="form-group">
              <input type="text" className="form-control input-lg" name="nameRoom" placeholder="Name room" required="required" />
            </div>
            <div className="form-group">
              <input type="number" className="form-control input-lg" name="price" placeholder="Price" required="required" />
            </div>
            <div className="form-group">
              <input type="number" className="form-control input-lg" name="max" placeholder="Max Person" required="required" />
            </div>
            <div className="form-group">
              <input type="number" className="form-control input-lg" name="size" placeholder="Size" required="required" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control input-lg" name="view" placeholder="View" required="required" />
            </div>
            <div className="form-group">
              <input type="number" className="form-control input-lg" name="bed" placeholder="Bed" required="required" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn btn-lg btn-block signup-btn">Update</button>
            </div>
          </form>
        </div>
      </div>
      
    )
}
export default UpdateService;