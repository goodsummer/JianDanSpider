package jiandan;

import java.util.concurrent.ArrayBlockingQueue;

import org.apache.commons.io.IOUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class GetPicUrlThread implements Runnable {
	
	private ArrayBlockingQueue<String> abq;
	private int pageNum;
	
	GetPicUrlThread(ArrayBlockingQueue<String> abq, int pageNum) {
		this.abq = abq;
		this.pageNum = pageNum;
	}
	
	@Override
	public void run() {
		String url = "http://jiandan.net/ooxx/page-" + pageNum + "#comments";
		String html = "";
		try {
			html = IOUtils.toString(NetUtil.httpGet(url), "utf-8");
		} catch (Exception e) {
			System.out.println("第"+ pageNum + "页的图片地址=================解析失败");
			return;
		}

		Document dom = Jsoup.parse(html);		
		Elements elems = dom.select("#comments .commentlist img");
		
		for(Element e : elems) {
			String picUrl = e.attr("src");
			try {
				abq.put(picUrl);
			} catch (InterruptedException e1) {
				System.out.println("图片的url进入队列失败,url=" + picUrl);
			}
		}	
		
		System.out.println("第"+ pageNum + "页的图片地址=======解析完成");	
	}
}