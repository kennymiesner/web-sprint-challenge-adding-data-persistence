const db = require('../../data/dbConfig')

async function getTasks() {
  const rows = await db('tasks as t')
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
    .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description')
  const result = rows.map(row => ({
    task_id: row.task_id,
    task_notes: row.task_notes,
    task_description: row.task_description,
    task_completed: row.task_completed ? true : false,
    project_name: row.project_name,
    project_description: row.project_description,
  }))
  return result
}

function addTask(task) {
  return db('tasks').insert(task)
    .then(([task_id]) => {
      return db('tasks').where('task_id', task_id).first()
    })
    .then(newTask => {
      return {...newTask, task_completed: newTask.task_completed ? true : false}
    })
}

module.exports = {
  getTasks,
  addTask,
}