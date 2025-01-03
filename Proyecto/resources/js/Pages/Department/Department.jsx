import CardProduct from '@/Components/Cards/CardProduct'
import GridProduct from '@/Components/Grids/GridProduct'
import SectionList from '@/Components/Sections/SectionList'
import Layout from '@/Layouts/Layout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'
import CarouselProduct from '../Product/CarouselProduct'
import CarouselSection from '../Home/CarouselSection'
import BannerText from '@/Components/Carousel/BannerText'
import Breadcrumb from '@/Components/Breadcrumb'
import SectionTitle from '@/Components/Sections/SectionTitle'

function Department({ department, offertProduct, bestSellersProduct, categories }) {

    return (
        <Layout>
            <Head title={department.meta_title} />
            <Breadcrumb data={[
                {
                    title: department.name,
                }
            ]} />

            

            <div className="container">
                <SectionList title="Top Ofertas">
                    <CarouselProduct products={offertProduct} />
                </SectionList>

                {bestSellersProduct.length > 0 && (
                    <SectionList title="Los mas vendidos">
                        <CarouselProduct products={bestSellersProduct} />
                    </SectionList>
                )}

                <div className='space-y-10'>
                    {categories.map((category) => (
                        <div className="">
                            <SectionTitle title={category.name} />
                            <div className="mt-8">
                                <CarouselProduct products={category.products} />
                            </div>
                        </div>

                    ))}
                </div>

                <div className="flex justify-center">
                    <Link className="btn btn-secondary" href={route('search', { 'departments[]': department.slug })} > Ver mas productos</Link>
                </div>
            </div>
            <br /><br />
        </Layout >
    )
}

export default Department
