import React from "react";

const OrderList = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email Id</th>
              <th>Service</th>
              <th>Pay With</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Rajia Ahmed</td>
              <td>rafi@kafi.com</td>
              <td>Skin care Treatment</td>
              <td>Credit card</td>
              <td>
                <select className="select w-full max-w-xs">
                  <option>Java</option>
                  <option>Go</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
