const teachers = [
    {teacher: 'Kennith', done: true},
    {teacher: 'Matthew', done: true},
    {teacher: 'Payne', done: true},
    {teacher: 'Jim', done: false}
  ];

  module.exports = {
    getAll: function() {
      return teachers;
    }
  };
  const path = require('path');

// require the To Do "database"
// const teacherDb = require('./data/teacher-db');
