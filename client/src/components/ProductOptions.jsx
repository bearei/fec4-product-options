import React from 'react';
import axios from 'axios';
import Brand from './Brand';
import Title from './Title';
import ItemId from './ItemId';
import Rating from './Rating';
import Price from './Price';
import FreeShipping from './FreeShipping';
import Colors from './Colors';
import Color from './Color';
import Sizes from './Sizes';
import Size from './Size';
import Quantity from './Quantity';
import ShippingRestriction from './ShippingRestriction';
import ShippingOptions from './ShippingOptions';
import AddTo from './AddTo';
import ReturnPolicy from './ReturnPolicy';
import '../../../public/styles.css';

class ProductOptions extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      variants: [],
      selectedVariant: {},
      colors: [],
      sizes: []
    };

    this.getRandomProduct = this.getRandomProduct.bind(this);
    this.renderColors = this.renderColors.bind(this);
    this.renderSizes = this.renderSizes.bind(this);
    this.handleColorClick = this.handleColorClick.bind(this);
    this.updateVariant = this.updateVariant.bind(this);
    this.getVariants = this.getVariants.bind(this);
  }

  componentDidMount() {
    this.getRandomProduct();
  }
  // will need to create get request for below product's 3 varieants - variants/:itemId
  getRandomProduct() {
    const itemId = window.location.pathname.split('/')[1];
    axios.get(`35.153.167.13:3306/products/${itemId}`).then(response => {
      // const randomIndex = Math.floor(Math.random() * response.data.length);
      const randomProduct = response.data[0];
      // console.log(randomProduct);
      randomProduct.freeShipping = randomProduct.freeShipping === 'true';
      randomProduct.shippingRestriction = randomProduct.shippingRestriction === 'true';
      // const variants = response.data;
      // const randomVariant = randomProduct;
      this.getVariants(randomProduct.itemId);

      this.setState({
        product: randomProduct
      });
    });
  }

  getVariants(itemId) {
    axios.get(`35.153.167.13:3306/variants/${itemId}`).then(response => {
      const randomIndex = Math.floor(Math.random() * response.data.length);
      // console.log(response.data);
      const variants = response.data;
      const randomVariant = variants[randomIndex];
      // console.log(randomVariant.variant_Id);
      this.setState(
        {
          variants: variants,
          selectedVariant: randomVariant
        },
        () => {
          this.setState({
            colors: this.renderColors(),
            sizes: this.renderSizes()
          });
        }
      );
    });
  }

  handleColorClick(color) {
    const { variants } = this.state;
    const variantClicked = variants.filter(variant => variant.color === color)[0];
    this.updateVariant(variantClicked);
  }

  updateVariant(variant) {
    this.setState({ selectedVariant: variant }, () => {
      this.setState({ colors: this.renderColors() });
    });
  }

  renderColors() {
    const { product, variants } = this.state;
    return variants.map(variant => {
      const isSelected = variant.itemId === product.itemId;

      return (
        <Color
          color={variant.color}
          key={variant.variant_Id}
          handleColorClick={this.handleColorClick}
          selected={isSelected}
        />
      );
    });
  }

  renderSizes() {
    const { variants } = this.state;
    const uniqueSizes = variants.reduce((accum, currentVariant) => {
      const currentSize = currentVariant.size;
      return accum.concat(!accum.includes(currentSize) ? currentSize : []);
    }, []);

    const sizeOptions = ['XS', 'S', 'M', 'L', 'XL'];
    const sorted = uniqueSizes.sort((a, b) => sizeOptions.indexOf(a) - sizeOptions.indexOf(b));

    return sorted.map(uniqueSize => <Size size={uniqueSize} key={uniqueSize} />);
  }

  render() {
    const { product, selectedVariant, colors, sizes } = this.state;

    return (
      <div className="productOptions">
        <Brand brand={product.brand} />
        <Title title={product.title} />
        <ItemId itemId={product.itemId} />
        <Rating averageRating={product.averageRating} reviewCount={product.reviewCount} />
        <Price price={selectedVariant.price} />
        <FreeShipping freeShipping={product.freeShipping} />
        <Colors colors={colors} handleColorClick={this.handleColorClick} />
        <Sizes sizes={sizes} />
        <Quantity />
        <ShippingRestriction shippingRestriction={product.shippingRestriction} />
        <hr />
        <ShippingOptions />
        <AddTo />
        <ReturnPolicy />
      </div>
    );
  }
}

export default ProductOptions;
