const React = require('react');
class Search extends React.Component {
  render() {
    let a = [1,2,3,4,5]
    return <div>
      1111111
      {a.map((item, index) => {
        return <div key={index}>{index + 1}</div>
      })}
    </div>
  }
}
console.log(<Search />)
module.exports = <Search />;