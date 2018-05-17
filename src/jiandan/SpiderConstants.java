package jiandan;

public class SpiderConstants {
	
	/**
	 * 存储图片的文件夹
	 */
	public static final String IMG_FILE_DIR = "D://煎蛋图/";
		
	/**
	 * 初始http请求头
	 */
	public static String HTTP_HEADER = "Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/534.11 (KHTML, like Gecko) Chrome/9.0.570.0 Safari/534.11";
	
	/**
	 * 更换请求头间隔时间 （最好为一分钟以内）
	 */
	public static final long HTTP_HEADER_CHANGE_PERIOD = 40 * 1000; //毫秒
		
	/**
	 * 抓取每一页图片url后的休眠时间
	 */
	public static final long MAIN_SLEEP_TIME = 1 * 1000; //毫秒
	
	/**
	 * 更换代理ip间隔时间
	 */
	public static final long CHANGE_PROXY_PERIOD = 90 * 1000; //毫秒
	
	/**
	 * 初始代理ip （空表示没有）
	 */
	public static String PROXY_IP = "";
	
	/**
	 * 初始代理端口（0表示没有）
	 */
	public static int PROXY_PORT = 0; 
	
	/**
	 * 从第几页开始抓取 0表示从最新的一页开始
	 */
	public static int START_PAGE_NUM = 0;
}
