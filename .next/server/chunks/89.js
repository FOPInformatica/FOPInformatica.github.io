"use strict";
exports.id = 89;
exports.ids = [89];
exports.modules = {

/***/ 2089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-scroll-up"
var external_react_scroll_up_ = __webpack_require__(8405);
var external_react_scroll_up_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_up_);
;// CONCATENATED MODULE: ./components/elements/BackToTop.js


function BackToTop() {
    return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_scroll_up_default()), {
        showUnder: 160,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            id: "scrollUp",
            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                class: "w-4 h-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M5 10l7-7m0 0l7 7m-7-7v18"
                })
            })
        })
    }));
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./data/site.json
var site = __webpack_require__(6662);
;// CONCATENATED MODULE: ./data/social.json
const social_namespaceObject = JSON.parse('[{"name":"Facebook","link":"https://www.facebook.com/InformaticaPe","icon":"fa-facebook"},{"name":"Linkedin","link":"https://www.linkedin.com/company/fed-olimpica-peruana-informatica/","icon":"fa-linkedin"},{"name":"Github","link":"https://github.com/fopInformatica","icon":"fa-github"},{"name":"Youtube","link":"https://www.youtube.com/channel/UC5fcUtSe8oPyN7sNRvLI4ow","icon":"fa-youtube"},{"name":"Instagram","link":"https://www.instagram.com/olimp_pe/","icon":"fa-instagram"}]');
;// CONCATENATED MODULE: ./components/layout/Footer.jsx





var phone = site/* phone */.m;
var email = site/* email */.D;
const Footer = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "py-20",
            style: {
                background: "#1B253A"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container px-4 mx-auto wow animate__animated animate__fadeIn",
                "data-wow-delay": ".3s",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full lg:w-1/5 px-3 mb-6 lg:mb-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "h-10",
                                                src: "/assets/imgs/logos/logo.svg",
                                                alt: "Monst"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "order-first lg:order-last -mx-2 mb-4 lg:mb-0 ",
                                        children: [
                                            social_namespaceObject.map((social)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    id: "social",
                                                    className: "inline-block px-2 ",
                                                    href: social.link,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: `fa ${social.icon}`
                                                    })
                                                })
                                            ),
                                            ";"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full lg:w-2/5 px-3 mb-8 lg:mb-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400 leading-relaxed"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full lg:w-1/5 px-3 mb-8 lg:mb-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "lg:text-lg text-blueGray-400"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full lg:w-1/5 px-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-white",
                                        children: "Contacto"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "lg:text-lg text-blueGray-400",
                                        children: phone
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "lg:text-lg text-blueGray-400",
                                        children: email
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-col lg:flex-row items-center lg:justify-between",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "text-sm text-blueGray-400",
                            children: [
                                "2022 FOPI \xa9. Todos los derechos reservados. ",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-blue-400",
                                    href: "https://fopi.org.pe/",
                                    target: "_blank",
                                    children: "Peruvian Federation for Olympiads in Informatics \xa9."
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const layout_Footer = (Footer);

;// CONCATENATED MODULE: ./data/navigation.json
const navigation_namespaceObject = JSON.parse('[{"name":"Inicio","link":"/"},{"name":"Quiénes Somos","link":"/about"},{"name":"Prepárate","link":"/material"},{"name":"EGOI 2022","link":"/egoi-2022"}]');
;// CONCATENATED MODULE: ./components/layout/Header.jsx





const Header = ({ handleHidden  })=>{
    const { 0: scroll , 1: setScroll  } = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("scroll", ()=>{
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: scroll ? "bg-transparent sticky-bar mt-4 stick" : "bg-transparent sticky-bar mt-4",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "principal",
                className: "container bg-transparent",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "bg-transparent flex justify-between items-center py-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-3xl font-semibold leading-none",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "h-10",
                                    src: "/assets/imgs/logos/logo.svg",
                                    alt: "FOPI"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "hidden lg:flex lg:items-center lg:w-auto lg:space-x-12",
                            children: navigation_namespaceObject.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "pt-4 pb-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: nav.link,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "text-sm font-semibold text-black hover:text-blueGray-500",
                                            children: nav.name
                                        })
                                    })
                                })
                            )
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "hidden lg:block",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/login",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "btn-accent hover-up-2",
                                        children: "Iniciar Sesi\xf3n"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/signup",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "btn-primary hover-up-2",
                                        children: "Registrarse"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "lg:hidden",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300",
                                onClick: handleHidden,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    className: "fill-current h-4 w-4",
                                    viewbox: "0 0 20 20",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                            children: "Mobile menu"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const layout_Header = (Header);

;// CONCATENATED MODULE: ./components/layout/MobileMenu.jsx



const MobileMenu = ({ hiddenClass , handleRemove  })=>{
    const { 0: isActive , 1: setIsActive  } = (0,external_react_.useState)({
        status: false,
        key: ""
    });
    const handleToggle = (key)=>{
        if (isActive.key === key) {
            setIsActive({
                status: false
            });
        } else {
            setIsActive({
                status: true,
                key
            });
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${hiddenClass} navbar-menu relative z-50 transition duration-300`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transition duration-300",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center mb-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "mr-auto text-3xl font-semibold leading-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "h-10",
                                            src: "/assets/imgs/logos/monst-logo.svg",
                                            alt: "Monst"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "navbar-close",
                                    onClick: handleRemove,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blue-500",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewbox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M6 18L18 6M6 6l12 12"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "mobile-menu",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: isActive.key == 1 ? "mb-1 menu-item-has-children rounded-xl active" : "mb-1 menu-item-has-children rounded-xl",
                                            onClick: ()=>handleToggle(1)
                                            ,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    class: "menu-expand",
                                                    children: "+"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl",
                                                        children: "Home"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: isActive.key == 1 ? "dropdown pl-5" : "hidden",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/index",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                                    children: "Home 1"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/index-2",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                                    children: "Home 2"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/index-3",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                                    children: "Home 3"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/index-4",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                                    children: "Home 4"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/index-5",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                                    children: "Home 5"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-1 rounded-xl",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/about",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl",
                                                    children: "About Us"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/services",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                    children: "Services"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/portfolio",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                    children: "Portfolio"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/pricing",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                    children: "Pricing"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/team",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                    children: "Team"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: isActive.key == 2 ? "mb-1 menu-item-has-children rounded-xl active" : "mb-1 menu-item-has-children rounded-xl",
                                            onClick: ()=>handleToggle(2)
                                            ,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    class: "menu-expand",
                                                    children: "+"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                        children: "Blog"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: isActive.key == 2 ? "dropdown pl-5" : "hidden",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/blog",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                                    children: "Category 1"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/blog-2",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                                    children: "Category 2"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/blog-single",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                                    children: "Single 1"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/blog-single-2",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                                    children: "Single 2"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/faqs",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                    children: "Faqs"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/testimonials",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                    children: "Testimonial"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/contact",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                    children: "Contact Us"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mt-4 pt-6 border-t border-blueGray-100",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/signup",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 text-white rounded",
                                                children: "Sign Up"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/login",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "block px-4 py-3 mb-2 text-xs text-center text-blue-500 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded",
                                                children: "Log In"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mt-auto",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "my-4 text-xs text-blueGray-400",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Get in Touch"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-blue-500 hover:text-blue-500 underline",
                                            children: "contact@monst.com"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "inline-block px-1",
                                    href: "https://facebook.com",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/imgs/icons/facebook-blue.svg",
                                        alt: "Monst"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "inline-block px-1",
                                    href: "https://twitter.com",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/imgs/icons/twitter-blue.svg",
                                        alt: "Monst"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "inline-block px-1",
                                    href: "https://www.instagram.com",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/imgs/icons/instagram-blue.svg",
                                        alt: "Monst"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const layout_MobileMenu = (MobileMenu);

;// CONCATENATED MODULE: ./components/layout/Layout.jsx







const Layout = ({ children  })=>{
    const { 0: hiddenClass , 1: setHiddenClass  } = (0,external_react_.useState)("hidden");
    const handleHidden = ()=>setHiddenClass("")
    ;
    const handleRemove = ()=>{
        if (hiddenClass === "") {
            setHiddenClass("hidden");
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Federaci\xf3n Peruana de Inform\xe1tica | Asociaci\xf3n sin fines de lucro. Promoviendo el futuro de la programaci\xf3n en el Per\xfa"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js",
                        integrity: "sha512-Eak/29OTpb36LLo2r47IpVzPBLXnAMPAVypbSZiZ4Qkf8p/7S/XRG5xp7OKWPPYfJT6metI+IORkR5G8F900+g==",
                        crossorigin: "anonymous",
                        referrerpolicy: "no-referrer"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        children: "new WOW().init();"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "main font-body text-body",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {
                        handleHidden: handleHidden
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {
                        hiddenClass: hiddenClass,
                        handleRemove: handleRemove
                    }),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(BackToTop, {
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ }),

/***/ 6662:
/***/ ((module) => {

module.exports = JSON.parse('{"m":"+1 650-785-6754","D":"contacto@fopi.org.pe"}');

/***/ })

};
;