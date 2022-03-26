import PreloaderGif from '../assets/preloaders/preloaderGIF.gif'


const Preloader = (props) => {
	return (
	<div className="loader">
		<img src={PreloaderGif} alt='загрузка'/>
	</div>
	);
}
 
export default Preloader;