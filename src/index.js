import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import ComponentDetail from './ComponentDetail.js'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
         <h3 className="ui dividing header">Comments</h3>
         <ApprovalCard ><ComponentDetail author="sam" time="today 9.00 am" image={faker.image.avatar()} text="it is very good"/></ApprovalCard>
     
       <ApprovalCard><ComponentDetail author="kiyy"  time="today 8.00 am" image={faker.image.avatar()} text="it is fantastic"/></ApprovalCard>
       <ApprovalCard><ComponentDetail author="arav"  time="today 8.00 am" image={faker.image.avatar()} text="it is fantastic"/></ApprovalCard>
       <ApprovalCard><ComponentDetail author="rehan"  time="today 7.00 am" image={faker.image.avatar()} text="it is nice blog post"/></ApprovalCard>
       <ApprovalCard><ComponentDetail author="maggi"  time="today 9.00 am" image={faker.image.avatar()} text="it is fantastic"/></ApprovalCard>
       <ApprovalCard><ComponentDetail author="artwes"  time="today 9.00 am" image={faker.image.avatar()} text="here the finest content ever"/></ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
