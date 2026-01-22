import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/layout/PageHeader';

export default function Legal({ title, content }) {
    return (
        <>
            <Helmet>
                <title>{title} | Clean Luxury Villas</title>
            </Helmet>

            <PageHeader
                title={title}
                subtitle="Legal Information"
                image="/images/hero-bg.png"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="prose prose-lg prose-headings:font-serif prose-headings:text-heading prose-p:text-body">
                        {/* This would be real MD or HTML content */}
                        <p className="text-lg leading-relaxed">
                            Last Updated: January 2026
                        </p>
                        <hr className="my-8 border-divider" />
                        <p>
                            {content || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                        </p>
                        <h3>1. Introduction</h3>
                        <p>
                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Look, this is a demo site, so these legal terms are placeholders.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
