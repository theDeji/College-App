import React, { useEffect, useState } from "react";

const menuItems = [
  {
    "name": "Open Tables",
    "url": "/",
    "tag":"menu1",
    "children": [
      {
        "name": "Students",
        "url": "/students"
      },
      {
        "name": "Teachers",
        "url": "/teachers"
      },
      {
        "name": "Students and Teachers",
        "url": "/studentsandteachers"
      }
    ]
  }
]

export default menuItems;
