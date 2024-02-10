import { useState } from 'react';
import PropTypes from 'prop-types';
import { CiHeart } from "react-icons/ci";
import { LiaCommentSolid } from "react-icons/lia";
import { PiShareFat } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { likeQuote, unlikeQuote } from '../store/actions';
import { Modal, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter , FaWhatsapp} from "react-icons/fa";

export const Quote = ({ quote }) => {
  const [isLiked, setIsLiked] = useState(quote.isLiked || false);
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      dispatch(unlikeQuote(quote._id));
    } else {
      setIsLiked(true);
      dispatch(likeQuote({ ...quote, isLiked: true }));
    }
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const quoteUrl = `https://api.quotable.io/quotes/${quote._id}`;

  const copyToClipboard = () => {
    const textField = document.createElement('textarea');
    textField.innerText = quote.content;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${quoteUrl}&quote=${quote.content}`;
    window.open(facebookUrl, '_blank');
  };

  const shareOnInstagram = () => {
    // Instagram doesn't support direct sharing via URL
    // You can open a new tab/window to the Instagram page with a caption
    window.open(`https://www.instagram.com/?url=${quoteUrl}&caption=${quote.content}`, '_blank');
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${quoteUrl}&text=${quote.content}`;
    window.open(twitterUrl, '_blank');
  };
  const shareOnWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${quote.content}%20${quoteUrl}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="row quote-border">
      <div className="col-sm-2 col-md-2">
        <FaRegUserCircle className="author-profile" />
      </div>
      <div className="col-sm-10 col-md-10">
        <div className='quote'>
          <div className='quote-content'>
            <h6>- {quote.author}</h6>
            <p>{quote.content}</p>
          </div>
          <div className='quote-icons'>
            <ul type="none" className='icons-container'>
              <li onClick={handleLike}>
                <CiHeart className={`icons ${isLiked ? 'liked' : ''}`} />
              </li>
              <li> <LiaCommentSolid className='icons' /></li>
              <li> <PiShareFat className="icons" onClick={openModal} /> </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Share modal */}
      <Modal show={isModalOpen} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Share Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-around">
            <FaFacebook onClick={shareOnFacebook} />
            <FaInstagram onClick={shareOnInstagram} />
            <FaTwitter onClick={shareOnTwitter} />
            <FaWhatsapp onClick={shareOnWhatsApp} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={copyToClipboard}>
            Copy Quote
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.shape({
    _id: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    isLiked: PropTypes.bool,
  }),
};
