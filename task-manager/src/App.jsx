import React, { useState, useMemo } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filters from './components/Filters';
import TaskStats from './components/TaskStats';
import './styles/App.css';

const PRIORITIES = {
  HIGH: 'High',
  MEDIUM: 'Medium',
  LOW: 'Low'
};

const FILTER_OPTIONS = {
  ALL: 'All',
  COMPLETED: 'Completed',
  INCOMPLETE: 'Incomplete'
};

function App() {
  const [tasks, setTasks] = useState([]);
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState(FILTER_OPTIONS.ALL);

  // Add new task
  const addTask = (title, priority) => {
    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  // Toggle task completion
  const toggleTaskCompletion = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  // Filter and sort tasks
  const filteredAndSortedTasks = useMemo(() => {
    let filtered = [...tasks];

    // Apply priority filter
    if (priorityFilter !== 'All') {
      filtered = filtered.filter(task => task.priority === priorityFilter);
    }

    // Apply status filter
    if (statusFilter === FILTER_OPTIONS.COMPLETED) {
      filtered = filtered.filter(task => task.completed);
    } else if (statusFilter === FILTER_OPTIONS.INCOMPLETE) {
      filtered = filtered.filter(task => !task.completed);
    }

    // Sort by priority (High -> Medium -> Low)
    const priorityOrder = { High: 3, Medium: 2, Low: 1 };
    return filtered.sort((a, b) => {
      if (priorityOrder[b.priority] !== priorityOrder[a.priority]) {
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      }
      // If same priority, sort by creation date
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  }, [tasks, priorityFilter, statusFilter]);

  // Update task priority
  const updateTaskPriority = (taskId, newPriority) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, priority: newPriority } : task
      )
    );
  };

  // Clear all completed tasks
  const clearCompletedTasks = () => {
    setTasks(prevTasks => prevTasks.filter(task => !task.completed));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🎯 Advanced Task Manager</h1>
        <p>Stay organized and productive</p>
      </header>

      <main className="app-main">
        <div className="dashboard-container">
          <div className="left-panel">
            <TaskForm addTask={addTask} />
            <TaskStats tasks={tasks} />
          </div>

          <div className="right-panel">
            <Filters
              priorityFilter={priorityFilter}
              setPriorityFilter={setPriorityFilter}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              clearCompletedTasks={clearCompletedTasks}
            />
            
            <TaskList
              tasks={filteredAndSortedTasks}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
              updateTaskPriority={updateTaskPriority}
            />
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>Total Tasks: {tasks.length} | Completed: {tasks.filter(t => t.completed).length}</p>
      </footer>
    </div>
  );
}

export default App;