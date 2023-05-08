import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Stack, Nav, Navbar, Form, Button } from 'react-bootstrap';

export default function TsNavbar(props) {
  return (
    <Navbar
      className={`fixed-top ${props.variation ? 'navbar--orange' : ''}`}
      collapseOnSelect
      expand='sm'
      bg='dark'
      variant='dark'
    >
      <Container fluid>
        <Stack
          className='me-3 me-xl-3 me-xxl-4'
          direction='horizontal'
          gap={3}
        >
          <Link href='/'>
            <Image
              src='/static/images/logo.png'
              alt='...'
              width={67}
              height={64}
            />
          </Link>
          <button className=' btn  btn-beta rounded-2  mt-auto fw-medium'>
            <span>BETA</span>
          </button>
        </Stack>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav'>
          {/* <div className='ts-searchbar d-none d-xl-block'>
            <Form.Control
              size='lg'
              type='text'
              placeholder='Search'
            />
            <button className='btn-search'>
              <Image
                src='/static/icons/search-normal.svg'
                alt='...'
                width={24}
                height={24}
              />
            </button>
          </div> */}
          <Nav className='ms-auto pt-4 pt-sm-0'>
            {/* <Link
              className='nav-link'
              href=''
            >
              MINT
            </Link>
            <Link
              className='nav-link'
              href=''
            >
              EXPLORE
            </Link>
            <Link
              className='nav-link'
              href=''
            >
              COLLECTION
            </Link>
            <Link
              className='nav-link'
              href=''
            >
              OWLIES
            </Link>
            <Link
              className='nav-link'
              href=''
            >
              STAKE
            </Link>
            <Link
              className='nav-link'
              href=''
            >
              DOCS
            </Link> */}
            {/* <Link
              className='btn btn-secondary px-3 py-2 mt-1'
              href=''
            >
              Launch App
            </Link > */}

            <Stack direction="horizontal" gap={3}>
              <Button
                href="#"

                className={`btn btn-secondary px-3 py-2 mt-1 `}
              >

                <Image
                  src="/static/icons/profile.svg"
                  alt="..."
                  width={24}
                  height={24}
                />
              </Button>
            </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
