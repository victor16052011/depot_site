import React from 'react'

import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

 

const Hello = props => (

  <div>Hello {props.name}!</div>

)

 

Hello.defaultProps = {

  name: 'David'

}

 

Hello.propTypes = {

  name: PropTypes.string

}

 

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(

    <Hello name="React" />,

    document.body.appendChild(document.createElement('div')),

  )

})

edit app/views/orders/new.html.erb

<div class="depot_form">

  <fieldset>

    <legend>Please Enter Your Details</legend>

    <%= render 'form', order: @order %>

  </fieldset>

</div>

 

<%= javascript_pack_tag("hello_react") %>