package jiandan;

import java.util.ArrayList;
import java.util.List;

public class ChangeIpThread implements Runnable {
	
	private static final List<ProxyBean> proxyList = new ArrayList<ProxyBean>();
	
	//录入时间2016年7月18日 11:19:03
	static {
		proxyList.add(new ProxyBean("61.168.11.25", 8080));
	}
	
	@Override
	public void run() {
		
		try {
			Thread.sleep(SpiderConstants.CHANGE_PROXY_PERIOD);
		} catch (InterruptedException e1) {
			e1.printStackTrace();
		}
		
		while(true) {
			for(int i=0; i<proxyList.size(); ) {
				SpiderConstants.PROXY_IP = proxyList.get(i).getIp();
				SpiderConstants.PROXY_PORT = proxyList.get(i).getPort();
				
				System.out.println("===================http代理已更换为" + SpiderConstants.PROXY_IP + ":" + SpiderConstants.HTTP_HEADER + "================");

				if(i == (proxyList.size() - 1)) {
					i = 0;
				} else {
					i++;
				}
				
				try {
					Thread.sleep(SpiderConstants.CHANGE_PROXY_PERIOD);
				} catch (InterruptedException e) {
				}
			}		
		}		
	}

}
