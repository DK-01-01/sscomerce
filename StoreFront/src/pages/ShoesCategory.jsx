import React, { useContext } from 'react';
import './css/ShoesCategory.css'
import { ShoesContext } from '../context/ShoesContext';

import Item from '../components/Item/Item';

const ShoesCategory = (props) => {

    const {all_product} = useContext(ShoesContext);

  return (
    <div className='shoes-category'>
      <img className='shoescategory-banner' src={props.banner} alt="" />
      <div className="shoescategory-indexSort">
        <p>
            <span>Showing 1-4</span> out of 12 products
        </p>
        </div>
        <div className="shoescategory-products">
            {all_product.map((item, i) => {
                if (props.category===item.category) {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                }
                else {
                return null
                }
            })}
        </div>

      <div className="shoescategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShoesCategory