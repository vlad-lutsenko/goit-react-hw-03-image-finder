import React, { Component } from "react";
import Searchbar from "../../Components/Searchbar/Searchbar";
import get from "../../utils/axiosFunc";
import ImageGallery from "../../Components/ImageGallery/ImageGallery";
import Button from "../../Components/Button/Button";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class GalleryContainer extends Component {
  state = {
    gallery: [],
    query: "",
    page: 1,
    isLoading: false,
    error: false,
  };

  searchBarInput = (query) => {
    this.setState({
      query,
    });
  };

  axiosRequest = async () => {
    try {
      const { query, page } = this.state;
      const response = await get(query, page);
      return response.data.hits;
    } catch (error) {
      this.setState({
        error: true,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (query !== prevState.query) {
      this.setState({
        isLoading: true,
      });
      const request = async () => {
        const result = await this.axiosRequest();
        this.setState({
          gallery: [...result],
          isLoading: false,
        });
      };
      request();
    }

    if (page !== prevState.page) {
      this.setState({
        isLoading: true,
      });
      const request = async () => {
        const result = await this.axiosRequest();
        this.setState((state) => ({
          gallery: [...state.gallery, ...result],
          isLoading: false,
        }));
      };
      request();
    }
  }

  pageChanger = () => {
    this.setState((state) => ({
      page: state.page + 1,
    }));
  };

  render() {
    const { gallery, isLoading } = this.state;
    return (
      <>
        <Searchbar searchBarInput={this.searchBarInput} />

        {!!gallery.length && (
          <>
            <ImageGallery gallery={gallery} />
            <Button pageChanger={this.pageChanger} />
          </>
        )}
        {isLoading && (
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        )}
      </>
    );
  }
}
export default GalleryContainer;
