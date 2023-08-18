import React from 'react';

const BookingsRow = ({booking}) => {

    const {customerName, email, img, date, service, price} = booking;
    console.log(booking)
    return (
        <>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  
                    <div className="w-24 h-24 rounded">
                      {<img 
                        src={img}
                        alt="Loading"
                      />}
                    </div>
                  
                  <div>
                    <div className="font-bold">{service}</div>
                    <div className="text-sm opacity-50">Date : {date}</div>
                  </div>
                </div>
              </td>
              <td className='text-lg'>
                Customer Name : <span className='text-orange-600 font-semibold'>{customerName}</span>
                <br />
                <span className="text-sm">
                 Customer Email : <span className='text-orange-600 font-semibold underline'> {email}</span>
                </span>
              </td>
              <td>{price}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
        </>
    );
};

export default BookingsRow;