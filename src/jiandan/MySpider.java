package jiandan;

import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.apache.commons.io.IOUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

public class MySpider {
	
	public static void main(String[] args) {
			
		ArrayBlockingQueue<String> abq = new ArrayBlockingQueue<String>(10000);
		ExecutorService exec = Executors.newFixedThreadPool(10);
		
		//一个更换请求头线程
		exec.execute(new ChangeHttpHeaderThread());

		int pageNum = 0;
		
		if(SpiderConstants.START_PAGE_NUM  != 0) {
			pageNum = SpiderConstants.START_PAGE_NUM;
		} else {
			pageNum = getJianDanPicTotalNum();
		}
		
		for(int i=5; i>0; i--) {
			//5个存图线程 {
			exec.execute(new SavePicThread(abq));
		}
	
		//剩余抓图线程
		for(int i=pageNum; i>=0; i--) {
			exec.execute(new GetPicUrlThread(abq, i));
			try {
				Thread.sleep(SpiderConstants.MAIN_SLEEP_TIME);
			} catch (InterruptedException e) {
			}
		}
		
		exec.shutdown();
	}
	
	/**
	 * 
	    * @Title: getJianDanPicTotalNum
	    * @Description: 获取妹子图总页数
	 */
	public static int getJianDanPicTotalNum() {
		String url = "http://jandan.net/ooxx";

		String html = "";
		try {
			html = IOUtils.toString(NetUtil.httpGet(url), "utf-8");
		} catch (Exception e) {
			System.out.println("获取总页数失败");
			return 0;
		}

		Document dom = Jsoup.parse(html);
		//获得当前页码
		String pageNum = dom.select("#comments .current-comment-page").get(0).text().replace("[", "").replace("]", "");
		
		return Integer.valueOf(pageNum);
	}	
}


