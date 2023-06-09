import { sql_query } from "../lib/db";
import Image from 'next/image';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Head from 'next/head';
import TsNavbar from './components/TsNavbar';
import Hero from './components/Hero';
import ConnectButton from './components/ConnectButton';
import Footer from './components/Footer';

export default function Blog(props) {
    const {records} =props;
    console.log(records);
    if (!records) return <p>Something went wrong....</p>
    return <div> 
        <Head>
        <title>SG POLY BRIDGE</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <TsNavbar />
      <div className='ts-main-wrapper position-relative bg-primary-gradient  min-h-100  d-flex flex-column justify-content-center align-items-end   '>
      <Container fluid className='h-100 mb-5'>
                <div className='mw-1100 mx-auto'>
                  <Hero />
                </div>
              </Container>
        <Container fluid>
                <div className='d-flex flex-wrap justify-content-between gap-3 align-items-center mb-3'>
                    <div className='ts-searchbar ts-searchbar__sky-blue  '>
                        <Form.Control
                            className='bg-skyblue-gradient pe-5'
                            size='lg'
                            type='text'
                            placeholder='Search by tx, Stars Address, Memo, Token ID'
                        />
                        <button className='btn-search'>
                            <Image
                                src='/static/icons/search-normal.svg'
                                alt='...'
                                width={24}
                                height={24}
                            />
                        </button>
                    </div>
                    
                </div>
            </Container >
            <Table
                bordered
                hover
                responsive
                className='ts-table text-white mb-3'
            >
                <thead>
                    <tr>
                        <th colspan='2'>Sender</th>
                        <th className='text-center text-nowrap'>STG Tx</th>
                        <th className='text-center text-nowrap'>POLY Tx</th>
                        <th className='text-center text-nowrap'>TOKEN ID</th>
                        <th className='text-center text-nowrap'>STATUS</th>
                        <th>MEMO</th>
                        <th className='text-center text-nowrap'></th>
                    </tr>
                </thead>
                <tbody>
    {/* { */}
  {records && records.map((item) => (
    
        <tr>
            <td colSpan="2">{item.Sender}</td>
            <td className="text-center">{item.STGTx}</td>
            <td className="text-center">{item.POLYTx}</td>
            <td className="text-center">{item.TOKEN}</td>
            <td className="text-center">
                <a href="#" className="btn btn-orange text-white">
                    {item.STATUS}
                </a>
            </td>
            <td>{item.Sender}</td>
            <td className="text-center">
                <div className="d-flex gap-2 flex-wrap justify-content-center">
                    <a href="#" className="btn btn-secondary-2 text-white">
                        APPROVE
                    </a>
                    <a href="#" className="btn btn-outline-white text-white fw-medium text-nowrap">
                        UPDATE MEMO
                    </a>
                </div>
            </td>
        </tr>
    ))}
</tbody>

            </Table>
            <div className='mw-1100 mx-auto'>
                <Container fluid className='h-100 mb-5'>
                    <div className='d-flex flex-wrap justify-content-end gap-3'>
                        <div className='d-flex gap-3 align-items-center'>
                            <p className='text-nowrap mb-0'>ROWS PER PAGE</p>
                            <Form.Select
                                className='ts-transparent-select py-0'
                                aria-label='Select label'
                            >
                                <option>6</option>
                                <option value='1'>7</option>
                                <option value='2'>8</option>
                                <option value='3'>9</option>
                            </Form.Select>
                        </div>

                        <p className='text-nowrap mb-0'>1941-1946 OF 1946</p>

                        <div className='d-flex gap-3 align-items-center'>
                            <button className='btn border-0 bg-transparent p-0'>
                                <Image
                                    src='/static/icons/arrow-left-vertical-line-white.svg'
                                    alt='...'
                                    width={24}
                                    height={24}
                                />
                            </button>
                            <button className='btn border-0 bg-transparent p-0'>
                                <Image
                                    src='/static/icons/arrow-left-white.svg'
                                    alt='...'
                                    width={24}
                                    height={24}
                                />
                            </button>
                            <button className='btn border-0 bg-transparent p-0'>
                                <Image
                                    src='/static/icons/arrow-right.svg'
                                    alt='...'
                                    width={24}
                                    height={24}
                                />
                            </button>
                            <button className='btn border-0 bg-transparent p-0'>
                                <Image
                                    src='/static/icons/arrow-right-vertical-line-white.svg'
                                    alt='...'
                                    width={24}
                                    height={24}
                                />
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
            </div>
            <Container fluid className=' my-5 text-end'>
                <Footer />
              </Container>
            </div>
            
  }
  
  export async function getStaticProps(context) {
    try {
        const result = await sql_query(`
          SELECT * FROM records
        
        
      `);
      
      let records = JSON.parse(JSON.stringify(result))
        return {
            props: {records} // will be passed to our blog page component as props
            };
      } catch (e) {
        return {props: {records:false}} 
      }
  }


