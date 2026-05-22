localStorage.clear()

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@gmail.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login UI",
        taskDescription: "Create responsive login page using React and Tailwind.",
        taskDate: "2026-05-22",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve navbar alignment issues.",
        taskDate: "2026-05-18",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Dashboard Cards",
        taskDescription: "Create analytics cards for dashboard.",
        taskDate: "2026-05-24",
        category: "Dashboard"
      }
    ]
  },

  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@gmail.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Integrate frontend with mock APIs.",
        taskDate: "2026-05-23",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Sidebar",
        taskDescription: "Build sidebar navigation component.",
        taskDate: "2026-05-19",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize Images",
        taskDescription: "Compress dashboard assets for performance.",
        taskDate: "2026-05-20",
        category: "Optimization"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Employee Table",
        taskDescription: "Create employee management table.",
        taskDate: "2026-05-25",
        category: "Management"
      }
    ]
  },

  {
    id: 3,
    firstName: "Aditya",
    email: "employee3@gmail.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Setup Routing",
        taskDescription: "Configure React Router in project.",
        taskDate: "2026-05-22",
        category: "Routing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Dark Theme",
        taskDescription: "Implement dark theme styling.",
        taskDate: "2026-05-18",
        category: "Theme"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Project",
        taskDescription: "Deploy app on Netlify.",
        taskDate: "2026-05-21",
        category: "Deployment"
      }
    ]
  },

  {
    id: 4,
    firstName: "Krishna",
    email: "employee4@gmail.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Task Card",
        taskDescription: "Create reusable task card component.",
        taskDate: "2026-05-23",
        category: "Components"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Bugs",
        taskDescription: "Resolve React rendering bugs.",
        taskDate: "2026-05-17",
        category: "Debugging"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Local Storage",
        taskDescription: "Store employee data in localStorage.",
        taskDate: "2026-05-24",
        category: "Storage"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Responsive Design",
        taskDescription: "Improve mobile responsiveness.",
        taskDate: "2026-05-26",
        category: "Responsive"
      }
    ]
  },

  {
    id: 5,
    firstName: "Rohan",
    email: "e@e.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Authentication UI",
        taskDescription: "Create admin login authentication UI.",
        taskDate: "2026-05-22",
        category: "Authentication"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Footer",
        taskDescription: "Add footer section to dashboard.",
        taskDate: "2026-05-18",
        category: "Layout"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Search Feature",
        taskDescription: "Implement employee search functionality.",
        taskDate: "2026-05-25",
        category: "Feature"
      }
    ]
  }
]

const admin = [
    {
    "id": 1,
    "email": "admin@gmail.com",
    "password": "123"
    }
]

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return {employees,admin};
}