import React, { PureComponent } from 'react'

class Pagination extends PureComponent {

  pagination = (current, last, handlePageChange) => {

    let delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;
  
    range.push(1)
    for (let i = current - delta; i <= current + delta; i++) {
      if (i >= left && i < right && i < last && i > 1) {
        range.push(i);
      }
    }  
    range.push(last);

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }
    
    const pages = []
    for (let i = 0; i < rangeWithDots.length; i++) {
      pages.push(
        <li key={i} className={"page-item " + (rangeWithDots[i] === current ? "active" : (rangeWithDots[i] === "..." ? "disabled" : ""))}>
          <span onClick={() => { handlePageChange(rangeWithDots[i]) }} style={{cursor: 'pointer'}} className="page-link">{ rangeWithDots[i] }</span>
        </li>
      )
    }
    return pages
  }

  handlePageChange = (page) => {
    console.log(page);
  }

  render() {
    console.log(this.props.paginacao)
    const { current_page, last_page } = this.props.paginacao
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {this.pagination(current_page, last_page, this.handlePageChange)}
        </ul>
      </nav>
    )
  }
}

export default Pagination