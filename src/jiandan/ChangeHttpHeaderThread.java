package jiandan;

import java.util.ArrayList;
import java.util.List;

public class ChangeHttpHeaderThread implements Runnable {
		
	private static final List<String> headList = new ArrayList<String>();
	
	static	{
			headList.add("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.160 Safari/537.22");
			headList.add("Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; 360SE)");
			headList.add("Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Avant Browser)");
			headList.add("Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.8.131 Version/11.11");
			headList.add("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0.1) Gecko/20100101 Firefox/4.0.1");
			headList.add("Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50");
			headList.add("Mozilla/5.0 (Windows; U; Windows NT 6.1; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50");
			headList.add("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_0) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11");
			headList.add("Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Maxthon 2.0)");
			headList.add("Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0;");
			headList.add("Mozilla/5.0 (Windows NT 6.1; rv:2.0.1) Gecko/20100101 Firefox/4.0.1");
			headList.add("Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; SE 2.X MetaSr 1.0; SE 2.X MetaSr 1.0; .NET CLR 2.0.50727; SE 2.X MetaSr 1.0)");
			headList.add("Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; TencentTraveler 4.0)");
	}
	
	@Override
	public void run() {
		
		try {
			Thread.sleep(SpiderConstants.HTTP_HEADER_CHANGE_PERIOD);
		} catch (InterruptedException e1) {
			e1.printStackTrace();
		}
		
		
		while(true) {
			for(int i=0; i<headList.size(); ) {
				SpiderConstants.HTTP_HEADER = headList.get(i);
				
				System.out.println("===================http请求头已更换为" + SpiderConstants.HTTP_HEADER + "=====================");
				
				if(i == (headList.size() - 1)) {
					i = 0;
				} else {
					i++;
				}
				
				try {
					Thread.sleep(SpiderConstants.HTTP_HEADER_CHANGE_PERIOD);
				} catch (InterruptedException e) {
				}
			}		
		}			
	}
}
