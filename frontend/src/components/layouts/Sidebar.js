import React, { Component, useEffect, useState } from "react";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import menuItems from './menuItems'
import styled from 'styled-components'
import './index.css';

const styles = {
  list: {
    width: 300,
  },
  links: {
    textDecoration: 'none',
  },
  menuHeader: {
    paddingLeft: '15px'
  },
  menu: {
    paddingLeft: '30px'
  }
};

function Sidebar(props) {

  const [menu1, setMenu1] = useState(false)

  function handleClick(item) {
    switch (item) {
      case 'menu1':
        return setMenu1(!menu1)
     default:
       return 
    }
  }

  function getState(tag) {
    switch (tag) {
      case 'menu1':
        return menu1
      default:
        return 0
    }
  }

  function handler(children) {
    return children.map((subOption, index) => {

      if (!subOption.children) {
        return (
          <Link to={subOption.url} key={index}>
            <SidebarItem key={subOption.name}
              style={{ padding: '10px 20px' }}
            >
              {subOption.icon}
              <p style={{ fontSize: '12px' }}>{subOption.name}</p>
            </SidebarItem>
          </Link>
        );
      }

      return (
        <div key={subOption.name}>
          <ListItem
            button
            onClick={() => handleClick(subOption.tag)}>
            <SidebarItem key={subOption.name}
            >
              <p>{subOption.name}</p>
              <p className="header-sub">{subOption.subTitle}</p>
              {getState(subOption.tag) ?
                <ExpandLess /> :
                <ExpandMore />
              }
            </SidebarItem>
          </ListItem>

          <Collapse
            in={getState(subOption.tag)}
            timeout="auto"
            unmountOnExit
            style={{ backgroundColor: '#a7a7a74a' }}
          >
            {handler(subOption.children, index)}
          </Collapse>
        </div>
      )
    })
  }


  return (
    <div className={props.classes.list}>
      <SidebarParent>
        <div style={{ position: 'fixed' }}>
          <List>
            {handler(menuItems, -1)}
          </List>
        </div>
        <div className="behind-the-scenes" />
      </SidebarParent>
    </div>
  )

}
export default withStyles(styles)(Sidebar)

const SidebarParent = styled.div`
  background: #4D4D4D;
  padding-top:20px;
  
  a {
    text-decoration: none;
  }
  
  & > div {
    width: 300px;
    height: 100vh;
  }
  
  .behind-the-scenes {
    width: 300px;
  }
`;

const SidebarItem = styled.div`
  transition: all 0.25s ease-in-out;
  background: ${props => props.active ? "#A7A7A7" : ""};
  border-radius: 4px;
  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  &:hover {
    cursor:pointer;
  }

  &:hover:not(:first-child) {
    background: #c34a36;
  }
`;