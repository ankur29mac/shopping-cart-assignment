import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../Contexts/UserContext/UserContext";

const Navbar = ({ handleSignout }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  return (
    <NavContainer>
      <div className="container">
        <div className="logo">
          <div className="img__container">
            <img src="/static/images/logo_2x.png" alt="" />
          </div>
        </div>
        <div className="right__container">
          <div className="nav__links">
            <Link to="/"> Home</Link>
            <Link to="/products/category/5b675e5e5936635728f9fc30"> Products</Link>
          </div>
          <div className="cart__box">
            <div className="box">
              <div className="links">
                {!isLoggedIn ? (
                  <Link to="/signin"> Signin </Link>
                ) : (
                  <Link to="/signin" onClick={handleSignout}>
                    {" "}
                    Signout
                  </Link>
                )}
                <Link to="/register"> Register </Link>
              </div>
              <div className="cart__svg">
                <img src="/static/images/cart.svg" alt="" />
                <span>0 items</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavContainer>
  );
};

export default Navbar;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const NavContainer = styled.nav`
  min-height: 15vh;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  .container {
    max-width: 80vw;
    height: 15vh;
    margin: 0 auto;

    display: flex;
    gap: 3rem;

    .logo {
      flex: 1;

      .img__container {
        height: 15vh;
        width: 100%;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }

    .right__container {
      flex: 3;
      padding: 1rem;

      display: flex;
      justify-content: space-between;

      .nav__links {
        flex: 1;
        display: flex;
        gap: 1rem;
        align-items: flex-end;
      }

      .cart__box {
        flex: 3;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        .box {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .links {
            display: flex;
            gap: 1rem;
            justify-content: space-between;
          }

          .cart__svg {
            height: 2rem;
            width: 100%;
            display: flex;
            flex: 1;
            justify-content: space-between;

            span {
              display: flex;
              flex-grow: 3;
              justify-content: flex-end;
              align-items: center;
            }

            svg {
              height: 100%;
              width: 100%;
              object-fit: cover;
            }
          }

          .links {
            flex: 1;
          }
        }
      }
    }
  }
`;
