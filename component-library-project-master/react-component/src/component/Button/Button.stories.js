import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';


  // storiesOf('Button', module)
  
  // .add('Primary', () => <Button label="Primary" type="primary"/>) 
  // .add('Danger', () => <Button label="DANGER" type="danger" />)
  
  // .add('Success', () => <Button label="SUCCESS" type="success"/>) 
  // .add('Warning', () => <Button label="WARNING" type="warning" />)
  // .add('Default', () => <Button label="DEFAULT" type="default" />)


 

  storiesOf('Button', module)
  .add('Primary', () => <Button label="Primary" type="primary2"/>) 
  .add('Danger', () => <Button label="DANGER" type="danger2" />)
  
  .add('Success', () => <Button label="SUCCESS" type="success2"/>) 
  .add('Warning', () => <Button label="WARNING" type="warning2" />)
    .add('Default', () => <Button label="DEFAULT" type="default2" />)
  


