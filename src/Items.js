import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render a list of items
 *
 * @param {Object} props - List of items
 */
function Items(props) {
  const { items = [] } = props;

  if (!items.length) {
    // No Items on the list, render an empty message
    return <span>No items in list</span>;
  }

  if (items.length === 1) {
    // One Item in the list, render a span
    return <span>{items[0]}</span>;
  }

  // Multiple items on the list, render a list
  return (
    <div>
        <div id="lol">
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
      </div>
    </div>
  );
}

Items.propTypes = {
  items: PropTypes.array,
};

Items.defaultProps = {
  items: [],
};

export default Items;