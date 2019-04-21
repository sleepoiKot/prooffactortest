import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.onAddRule = this.onAddRule.bind(this)
    this.removeRule = this.removeRule.bind(this)
    this.onChangeSelect = this.onChangeSelect.bind(this)
    this.onChangeUrl = this.onChangeUrl.bind(this)

    this.state = {
      listOfRules: [],
      selectValue: 'contains',
      url: ''
    }
  }
  
  onAddRule = e => {
    const rule = {
      value: this.state.selectValue,
      url: this.state.url
    }

    const newListOfRules = [...this.state.listOfRules, rule]

    this.setState({listOfRules: newListOfRules})
  }
  
  removeRule = i => () => {
    const rules = [...this.state.listOfRules]
    rules.splice(i, 1)

    this.setState({listOfRules: rules})
  }
  
  onChangeSelect = i => e => {
    const selectValue = e.target.value
    const rules = [...this.state.listOfRules]
    rules[i].selectValue = selectValue

    this.setState({listOfRules: rules})
  }
  
  onChangeUrl = i => e => {
    const url = e.target.value
    const rules = [...this.state.listOfRules]
    rules[i].url = url

    this.setState({listOfRules: rules})
  }

  render() {
    return (
      <main>
        <section className="section">
          <h2 className="heading-primary">
            Where would you like to display your campaign?
          </h2>
      
          {this.state.listOfRules.map((rule, i) => (
            <div key={i} className="rule">
              <button className="rule-close" onClick={this.removeRule(i)}>&nbsp;</button>
  
              <p className="heading-secondary">
                Type a full or partial url where you would like to display notifications.
              </p>
              <div className="row">
                <div className="col-1-of-3">
                  <select value={rule.selectValue} className="form-control" onChange={this.onChangeSelect(i)}>
                    <option value="contains">Contains</option>
                    <option value="exact_match">Exact Match</option>
                  </select>
                </div>
                <div className="col-2-of-3">
                  <input value={rule.url} onChange={this.onChangeUrl(i)} type="text" className="form-control" placeholder="Display URL" required="required"/>
                  {!rule.url && <label className="alert">URL is Missing</label>}
                </div>
              </div>
            </div>
          ))}
  
          <button onClick={this.onAddRule} className="btn btn-create u-margin-top-small">
            + New rule
          </button>
        </section>
      </main>
    )
  }
}

export default App;
