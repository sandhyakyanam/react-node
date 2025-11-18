import { useParams } from "react-router-dom";

function editUserProfile()
{
   const {id} = useParams();
   
   return (
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        
              <div className="mb-3">
                <label><strong>First Name</strong></label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Enter First Name"
                  className="form-control rounded-0"
                />
               
              </div>

              <div className="mb-3">
                <label><strong>Second Name</strong></label>
                <input
                  type="text"
                  name="secondname"
                  placeholder="Enter Second Name"
                  className="form-control rounded-0"
                />
               
              </div>

              <div className="mb-3">
                <label><strong>Email</strong></label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="form-control rounded-0"
                />
                
              </div>

              <div className="mb-3">
                <label><strong>Phone Number</strong></label>
                <input
                  type="text"
                  name="phonenumber"
                  placeholder="Enter Phone Number"
                  className="form-control rounded-0"
                />
               
              </div>

              <div className="mb-3">
                <label><strong>Profile Photo</strong></label>
                <input
                  type="file"
                  className="form-control rounded-0"
                />
              </div>

              <div className="mb-3">
                <label><strong>Password</strong></label>
                <input
                  type="input" name="password" placeholder="Enter Password"
                  className="form-control rounded-0"
                />
              </div>
           
              <div className="mb-3">
                <label><strong>Confirm Password</strong></label>
                <input
                  type="input" name="password" placeholder="Please confirm your password"
                  className="form-control rounded-0" 
                />
              </div>

              <div className="mb-3">
                <label htmlFor="status" className="form-label">
                  <strong>Status</strong>
                </label>
                <select
                  as="select"
                  id="status"
                  name="status"
                  className="form-control rounded-0"
                >
                  <option>Please select the status</option>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>
              <button type="submit" className="btn btn-success w-100 rounded-0">
                Submit
              </button>
      </div>
    </div>
   )
}
export default editUserProfile;