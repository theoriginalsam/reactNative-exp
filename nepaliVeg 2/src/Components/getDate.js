import moment from 'moment';
import React from 'react';

export var today = new Date().toISOString().slice(0, 10);

export var sixDay = new Date(new Date().setDate(new Date().getDate() - 6))
  .toISOString()
  .slice(0, 10);
